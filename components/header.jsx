export default function MainHeader() {
  return (
    <section className=" py-10 md:py-20 lg:py-24 xl:py-38">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Gear Up for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {" "}
                S U C C E S S
              </span>{" "}
              : Your Ultimate Preparation Hub!
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
