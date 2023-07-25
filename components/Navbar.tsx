import { NavLinks } from "@/constants/index"
import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
import AuthProviders from "./AuthProviders";


const Navbar = () => {
  const session =null
  return (
    <nav className="flexBetween navbar">
        <div className="flex-1 flexStart gap-10">
            <Link href="/">
                <Image src="/logo.svg" alt="Flexibble" width={115} height={43}/>
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
              {
                NavLinks?.map((link)=>(
                <Link href={link.href} key={link.key}>{link.text}</Link>
                ))
              }
            </ul>
        </div>
        <div className="flexCenter gap-4">
          {
            session ? (
              <>
              User photo
              <Link href="/create-project">
                Share work
              </Link>
              </>
            ):(
              <AuthProviders/>
            )
          }
        </div>
    </nav>
  )
}

export default Navbar
