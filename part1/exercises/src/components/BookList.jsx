export default function BookList() {
   let pageTitle = "List of Books by Yuval Noah Harari";
   let book1 = "https://i.thriftbooks.com/api/imagehandler/m/81EE5BEDA9CC5F89A9D940A89035515AD75FD10F.jpeg";
   let book2 = "https://i.thriftbooks.com/api/imagehandler/s/F680E85A33F8D544BBDDB2C29E87A9FED083E19A.jpeg";
   let book3 = "https://i.thriftbooks.com/api/imagehandler/s/144C587EB9E0901F9948A4E95964797978C77CE9.jpeg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="21 Lessons for the 21st Century" />
         <img src={book2} alt="Sapiens:  A Brief History of Humankind" />
         <img src={book3} alt="Homo Deus:  A Brief History of Tomorrow" />
      </div>      
   );
}