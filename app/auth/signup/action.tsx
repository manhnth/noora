"use server";
export async function signup(data: FormData) {
  // Tạo một mảng từ các cặp key-value trong formData
  const entries = Array.from(data.entries());

  // Sử dụng Object.fromEntries để chuyển đổi mảng thành đối tượng
  const formDataObject = Object.fromEntries(entries);
  console.log(formDataObject, entries);
  setTimeout(() => {}, 30000);
}
