import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppLogger} from './modules/logger/logger.service'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as rateLimit from 'express-rate-limit';
// import * as serveStatic from 'serve-static';
// import * as path from 'path';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    // logger: false,
  });

  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname,'..', 'views'));
  // app.setViewEngine('hbs');

  // app.useLogger(app.get(AppLogger)) //自定义日志
  
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  // app.use('/public', serveStatic(path.join(__dirname, '../public'), {
  //   maxAge: '1d',
  //   extensions: ['jpg', 'jpeg', 'png', 'gif'],
  //  }));

  const ApiOptions = new DocumentBuilder()
    .setTitle('API Doc')
    .setDescription('API Info')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const Apidocument = SwaggerModule.createDocument(app, ApiOptions);
  SwaggerModule.setup('api-doc', app, Apidocument);

  // app.use(cookieParser());

  await app.listen(3000);
}
bootstrap();
