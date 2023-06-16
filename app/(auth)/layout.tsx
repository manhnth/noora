export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[url('https://images.unsplash.com/photo-1457129962825-adcaea7406c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] bg-cover bg-no-repeat">
      {children}
    </div>
  );
}

// bg
//  bg -
//    [
//      url(
//        'https://images.unsplash.com/photo-1457129962825-adcaea7406c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
//      ),
//    ];
