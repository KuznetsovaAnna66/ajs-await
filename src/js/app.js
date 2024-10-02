import GameSavingLoader from "./GameSavingLoader";

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log("Сохранение загружено:", saving);
  } catch (error) {
    console.error("Ошибка при загрузке сохранения:", error);
  }
})();
