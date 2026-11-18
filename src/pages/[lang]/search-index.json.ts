import type { APIRoute } from 'astro';
import type { Locale } from '../../i18n/locales';
import { otherLocales } from '../../i18n/paths';
import { searchIndex } from '../../views/SearchIndex';

export const getStaticPaths = otherLocales;
export const GET: APIRoute = async ({ props }) =>
  new Response(JSON.stringify(await searchIndex((props as { locale: Locale }).locale)), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
