export const prerender = true;

import { redirect } from "@sveltejs/kit";

export function load() {
    redirect(302, "/kevatpaivanseisaus");
}