"useClient";
export const metadata = {
  title: 'Koryu Nikko',
  description: 'Link to shop',
}

export default function linkToShop({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}
