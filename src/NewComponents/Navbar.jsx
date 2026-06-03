export default function Navbar() {
  return (
    <div className="flex justify-between p-6">
      <a href="/" className="capitalize font-semibold text-[1.5rem] ">Qrypton</a>
      <a href="/services" className="capitalize font-semibold text-[1.5rem]">services</a>
      <a href="" className="capitalize font-semibold text-[1.5rem]">projects</a>
      <a href="" className="capitalize font-semibold text-[1.5rem]" >blog</a>
      <button className="cursor-pointer"><img src="/Images/hamburger-icon.webp" alt="hamburger-icon" /></button>
    </div>
  )
}
