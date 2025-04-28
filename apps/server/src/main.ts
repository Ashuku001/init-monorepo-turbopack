import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const allowedOrigins = ["http://localhost:3000", "https://turborepo.com"];
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: allowedOrigins,
      credentials: true,
    },
    bodyParser: true,
  });
  await app.listen(process.env.PORT ?? 3500);
}
bootstrap();
