import type { APIRoute } from 'astro';
import { locales } from '../i18n/locales';
import { searchIndex } from '../views/SearchIndex';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(await searchIndex(locales[0])), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
