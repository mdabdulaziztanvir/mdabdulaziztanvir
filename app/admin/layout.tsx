export default function adminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h3>from layout of admin</h3>
      {children}
    </>
  );
}
