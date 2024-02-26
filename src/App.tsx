import { Pagination } from "./components/ui/Pagination";


export function App() {
  return <>
  <Pagination getPage={function (pageNumber: number, pageSize: number): void {
      throw new Error("Function not implemented.");
    } } limit={100} page={10} setLimit={function (itemsPerPage: number): void {
      throw new Error("Function not implemented.");
    } } setPage={function (currentPage: number): void {
      throw new Error("Function not implemented.");
    } } totalPages={100}/>
  </>
}
