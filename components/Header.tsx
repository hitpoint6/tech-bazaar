type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
    </section>
  );
}

export default Header;
