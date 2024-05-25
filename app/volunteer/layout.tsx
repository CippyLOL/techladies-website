export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col text-center items-center justify-center gap-4 py-8 md:py-10">
      {/* <div className="inline-block max-w-lg text-center justify-center bg-blue-400"> */}
      {children}
      {/* </div> */}
    </section>
  );
}
