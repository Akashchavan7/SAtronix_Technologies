function PageShell({ hero, children }) {
  return (
    <main className="relative z-10">
      {hero}
      {children}
    </main>
  );
}

export default PageShell;
