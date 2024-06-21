export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h3>components name based routing from box</h3>
      {children}
    </>
  );
}
