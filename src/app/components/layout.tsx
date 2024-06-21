export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h3>components name based routing for components </h3>
      {children}
    </>
  );
}
