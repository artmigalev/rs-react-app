export function Form({ children }: { children: React.ReactNode }) {
  return (
    <>
      <form className="form">{children}</form>
    </>
  );
}

export function FormSearch({
  input,
  button,
}: {
  input: React.ReactNode;
  button: React.ReactNode;
}) {
  return (
    <>
      <form className="form">
        {input}
        {button}
      </form>
    </>
  );
}
