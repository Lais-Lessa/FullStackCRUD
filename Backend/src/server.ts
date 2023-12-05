import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then((): void => {
    
const PORT: number = 3000;
app.listen(PORT, () => console.log("Server listening on port " + PORT));
    console.log("Aplicação inicializada! Conectada ao banco de dados.");
  })
  .catch((err: unknown): void => {
    console.error("Error during Data Source initialization", err);
  });