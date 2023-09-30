import Link from "next/link";

function NavBar() {
  return (
    <nav className="shadow-md w-full">
      <div className="max-w-7xl mx-auto mb-16 px-3 py-3">
        <div className="flex justify-between">
          <Link href="/">
            <p className="text-lg font-semibold text-black tracking-wide">
              Tech Bazaar
            </p>
          </Link>
          <div className="flex space-x-4">
            <Link href="/products/new">
              <p>New Product</p>
            </Link>
            <Link href="/">
              <p>Products</p>
            </Link>
            <Link href="/orders">
              <p>Orders</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
