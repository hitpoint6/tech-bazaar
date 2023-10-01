import Link from "next/link";

export default async function PageNavigation({
  url,
  page,
  limit,
  totalPages,
}: {
  url: string;
  page: number;
  limit: number;
  totalPages: number;
}) {
  return (
    <div className="flex space-x-6 justify-end">
      <Link
        href={`${url}?page=${page > 1 ? page - 1 : 1}&limit=${limit}`}
        className={`rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800 ${
          page <= 1 && "pointer-events-none opacity-50"
        }`}
      >
        Previous
      </Link>
      <Link
        href={`${url}?page=${page + 1}&limit=${limit}`}
        className={`rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800 ${
          page >= totalPages && "pointer-events-none opacity-50"
        }`}
      >
        Next
      </Link>
    </div>
  );
}
