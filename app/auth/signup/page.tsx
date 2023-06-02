import { error } from 'console';
import { convertFormData, post_form, return_back } from '../shared';
import SignupForm from './signup-form';

const url = 'api/auth/signup';

export default function Page() {
  // async function action(formData: FormData) {
  //   'use server';

  //   const data = convertFormData(formData);
  //   const error = await post_form(url, data);
  //   if (!error) return_back();
  // }

  return <SignupForm />;
}
