import Link from 'next/link'
import Image from 'next/image'

/**
 * 1. do we really need h3 tag for button and nav links? 
 */

const Header = () => {
	return (
		<header className="flex justify-between p-5 pl-12 pr-12">
			{/* nav */}
			<div className="flex items-center space-x-11">
				{/* logo */}
				<h1 className="size-medium inline-flex text-4xl font-bold">snap</h1>

				{/* nav */}
				<div className="hidden items-center space-x-8 md:flex">
					<h3>
						<Link href="/">Features </Link><Image src="/images/icon-arrow-down.svg" width={10} height={6} />
					</h3>
					<h3>
						<Link href="/">Company </Link><Image src="/images/icon-arrow-down.svg" width={10} height={6} />
					</h3>
					<h3><Link href="/">Careers</Link></h3>
					<h3><Link href="/">About</Link></h3>
				</div>
			</div>

			{/* login / register */}
			<div className="flex items-center space-x-8">
				<h3 className="">Login</h3>
				<h3 className="rounded-2xl border-2 border-slate-900 px-6 py-2">Register</h3>
			</div>
		</header>
	)
}

export default Header
