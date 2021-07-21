export default interface Job {
  name: string,
  status: string,
  scraped_pages: number,
  failed_pages: number,
  empty_pages: number,
  created: number
}
