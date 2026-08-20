/**
 * The homepage mockup has solid black rails running down both page edges
 * (52px wide, from below the navbar to above the footer) with the 1440px
 * content column sitting between them. They only render when the viewport
 * is wide enough to actually show them.
 */
export default function SideRails() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed bottom-[220px] left-[max(0px,calc(50%-772px))] top-[130px] z-30 hidden w-[52px] bg-black min-[1544px]:block"
      />
      <div
        aria-hidden="true"
        className="fixed bottom-[220px] right-[max(0px,calc(50%-772px))] top-[130px] z-30 hidden w-[52px] bg-black min-[1544px]:block"
      />
    </>
  )
}
