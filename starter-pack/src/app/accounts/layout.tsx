export default function AccountsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        Accounts header
      </header>
      {children}
    </>
  )
}