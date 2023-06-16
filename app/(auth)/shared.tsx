import { api_call } from '@/lib/api_call';
import { redirect } from 'next/navigation';

type Params = Record<string, string>;

export const post_form = async (url: string, params: Params) => {
  try {
    await api_call(url, params, 'POST');
    return;
  } catch (ex: any) {
    console.log(ex, 'msg', ex.message);

    return ex.message || 'unknown error';
  }
};

export const return_back = () => {
  const back = sessionStorage.getItem('back') || window.location.origin;
  redirect(back);
  // window.location.href = back;
};

export function convertFormData(data: FormData): Params {
  const entries = Array.from(data.entries());

  return Object.fromEntries(entries) as Params;
}
