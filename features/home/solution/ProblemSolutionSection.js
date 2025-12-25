import TheChallenge from "./TheChallenge";
import TheSolution from "./TheSolution";

export default function ProblemSolution() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-indigo-50 py-24">
      <div className="container--common">
        <div className="flex flex-col gap-20 items-center justify-center">
          {/* Problem */}
          <TheChallenge />

          {/* Solution */}
          <TheSolution />
        </div>
      </div>
    </section>
  );
}
