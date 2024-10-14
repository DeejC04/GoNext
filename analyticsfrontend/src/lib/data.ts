export async function getProjects() {
    const res = await fetch('postgresql://analyticsdb_owner:A1XMixJK9mdS@ep-wild-moon-a653rcs4.us-west-2.aws.neon.tech/analyticsdb?sslmode=require')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }