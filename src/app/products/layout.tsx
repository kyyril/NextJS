export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ul className="flex gap-5">
        <li>sport</li>
        <li>fashion</li>
        <li>technology</li>
      </ul>
      {children}
    </>
  );
}
