import { Body, Controller, Post, Get } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';
import { SggstArticle } from './schemas/article.schema';

@Controller('article')
export class ArticleController {
    constructor(
        private articleService: ArticleService
    ){}

    @Post('/create')
    populateArticle(@Body() articleDto: ArticleDto) {
        return this.articleService.createArticle(articleDto);
    }

    @Get()
    async getAllArticles(): Promise<SggstArticle[]> {
        return this.articleService.findAll();
    }
}
