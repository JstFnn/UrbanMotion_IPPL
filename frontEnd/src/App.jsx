// import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from "react-router-dom";
// import { useEffect } from "react"; // Import useEffect

// // Components PAGES
// import { Navbar } from "./Components/Navbar/Navbar.jsx";
// import Footer from "./Components/Footer/Footer.jsx";
// import Sidebar from "./Pages/admin/componen/Sidebar/sidebar.jsx";

// // USER PAGES
// // import Home from "./Pages/user/Beranda/home.jsx";
// import HomePage from "./Pages/user/Home/home.jsx";
// import KontakKami from "./Pages/user/KontakKami/KontakKami";
// import TentangKami from "./Pages/user/TentangKami/TentangKami";
// import Login from "./Pages/auth/Login/Login";
// import Register from "./Pages/auth/Register/Register";
// import MyAccount from "./Pages/user/MyAccount/MyAccount.jsx";
// import Myhistory from "./Pages/user/MyHistory/histori.jsx";
// import Krl from "./Pages/user/Krl/Krl.jsx";
// import Tj from "./Pages/user/Tj/Tj.jsx";
// import MrtLrt from "./Pages/user/Mrt&Lrt/MrtLrt.jsx";
// import CarRental from "./Pages/user/Pricelist/Pricelist.jsx";
// import Sewa from "./Pages/user/sewa/sewa.jsx";
// import Konfirmasi from "./Pages/user/Konfirmasi-Sewa/Konfirmasi.jsx";

// // Admin PAGES

// import DashboardAdmin from "./Pages/admin/page/dashboardAdmin/dashboardAdmin.jsx";
// import ProductsPage from "./Pages/admin/page/produkAdmin/productRead/prdoukAdmin.jsx";
// import ProductDetailPage from "./Pages/admin/page/produkAdmin/productDetailEdit/productDetailPage.jsx";
// import ProductsEditPage from "./Pages/admin/page/produkAdmin/productEdit/productEditPage.jsx";
// import AdminSettingsPage from "./Pages/admin/page/settingAdmin/AdminSettingsPage.jsx";

// // 404 PAGES
// import NotFoundPage from "./Pages/404/notFound.jsx";

// // CSS
// import "./styles.css";
// import ProductsAddPage from "./Pages/admin/page/produkAdmin/productAdd/productAddPage.jsx";
// import BookingPage from "./Pages/admin/page/bookingAdmin/bookingAdmin.jsx";

// function AppContent() {
//   const location = useLocation();

//   // Tentukan halaman yang tidak menampilkan Navbar dan Footer
//   const hideHeaderFooter = ["/login", "/register", "*"].includes(location.pathname);

//   // Gunakan matchPath untuk memeriksa apakah URL cocok dengan pola '/admin/*'
//   const isAdminPage = matchPath("/admin/*", location.pathname);

//   useEffect(() => {
//     // Update document title based on the current route
//     const pageTitleMap = {
//       // user
//       "/": "Beranda - Urban Motion",
//       "/tentang-kami": "Tentang Kami - Urban Motion",
//       "/transportasi-umum/KRL": "KRL - Urban Motion",
//       "/transportasi-umum/MRT": "MRT & LRT - Urban Motion",

//       "/transportasi-umum/transjakarta": "Transjakarta - Urban Motion",
//       "/sewa": "Sewa - Urban Motion",
//       "/daftar-harga": "Daftar Harga - Urban Motion",
//       "/kontak": "Kontak Kami - Urban Motion",
//       "/login": "Login - Urban Motion",
//       "/register": "Register - Urban Motion",
//       "/my-account": "Profil - Urban Motion",
//       "/my-history": "Histori - Urban Motion",

//       // admin

//       "/admin/dashboard": "Dashboard - Urban Motion",
//       "/admin/product": "Product - Urban Motion",
//       "/admin/product-detail/:id": "Detail Product - Urban Motion",
//       "/admin/product/add": "Tambah Produk - Urban Motion",
//       "/admin/product-edit/:id": "Edit Produk- Urban Motion",
//       "/admin/product-delete/:id": "Delete Produk - Urban Motion",
//       "/admin/booking": "Booking - Urban Motion",
//       "/admin/settings": "Settings - Urban Motion",
//     };

//     // Set the document title based on the current path
//     document.title = pageTitleMap[location.pathname] || "Urban Motion";
//   }, [location.pathname]); // Re-run this effect every time the path changes

//   return (
//     <div className="app-wrapper">
//       {!hideHeaderFooter && !isAdminPage && <Navbar />}
//       <div className={`main-content ${isAdminPage ? "admin-layout" : ""}`}>
//         {isAdminPage && <Sidebar />} {/* Tampilkan Sidebar jika halaman admin */}
//         <div className={`content-area ${isAdminPage ? "admin-content" : ""}`}>
//           <Routes>
//             {/* User */}
//             <Route path="/" element={<HomePage />} />
//             <Route path="/tentang-kami" element={<TentangKami />} />
//             <Route path="/transportasi-umum" element={<div>Transportasi Umum</div>} />
//             <Route path="/kontak" element={<KontakKami />} />
//             <Route path="/my-account" element={<MyAccount />} />
//             <Route path="/my-history" element={<Myhistory />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/transportasi-umum/KRL" element={<Krl />} />
//             <Route path="/transportasi-umum/MRT" element={<MrtLrt />} />
//             <Route path="/transportasi-umum/transjakarta" element={<Tj />} />
//             <Route path="/daftar-harga" element={<CarRental />} />
//             <Route path="/sewa" element={<Sewa />} />
//             <Route path="/Konfirmasi" element={<Konfirmasi />} />

//             {/* Admin */}
//             <Route path="/admin/dashboard" element={<DashboardAdmin />} />
//             <Route path="/admin/product" element={<ProductsPage />} />
//             <Route path="/admin/product-detail/:id" element={<ProductDetailPage />} />
//             <Route path="/admin/product/add" element={<ProductsAddPage />} />
//             <Route path="/admin/product-edit/:id" element={<ProductsEditPage />} />
//             <Route path="/admin/product-delete/:id" element={<div>DELETE</div>} />
//             <Route path="/admin/booking" element={<BookingPage />} />
//             <Route path="/admin/settings" element={<AdminSettingsPage />} />

//             <Route path="/dummy" element={<div>Lorem Ipsum</div>} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </div>
//       </div>
//       {!hideHeaderFooter && !isAdminPage && <Footer />}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from "react-router-dom";
// import { useEffect } from "react";

// // Components
// import { Navbar } from "./Components/Navbar/Navbar.jsx";
// import Footer from "./Components/Footer/Footer.jsx";
// import Sidebar from "./Pages/admin/componen/Sidebar/sidebar.jsx";

// // Admin Route Protection
// import AdminRoute from "./Pages/auth/Login/AdminRoute.jsx";
// import UserRoute from "./Pages/auth/Login/UserRoute.jsx";
// // USER PAGES
// import HomePage from "./Pages/user/Home/home.jsx";
// import KontakKami from "./Pages/user/KontakKami/KontakKami";
// import TentangKami from "./Pages/user/TentangKami/TentangKami";
// import Login from "./Pages/auth/Login/Login";
// import Register from "./Pages/auth/Register/Register";
// import MyAccount from "./Pages/user/MyAccount/MyAccount.jsx";
// import Myhistory from "./Pages/user/MyHistory/histori.jsx";
// import Krl from "./Pages/user/Krl/Krl.jsx";
// import Tj from "./Pages/user/Tj/Tj.jsx";
// import MrtLrt from "./Pages/user/Mrt&Lrt/MrtLrt.jsx";
// import CarRental from "./Pages/user/Pricelist/Pricelist.jsx";
// import Sewa from "./Pages/user/sewa/sewa.jsx";
// import Konfirmasi from "./Pages/user/Konfirmasi-Sewa/Konfirmasi.jsx";

// // ADMIN PAGES
// import DashboardAdmin from "./Pages/admin/page/dashboardAdmin/dashboardAdmin.jsx";
// import ProductsPage from "./Pages/admin/page/produkAdmin/productRead/prdoukAdmin.jsx";
// import ProductDetailPage from "./Pages/admin/page/produkAdmin/productDetailEdit/productDetailPage.jsx";
// import ProductsEditPage from "./Pages/admin/page/produkAdmin/productEdit/productEditPage.jsx";
// import ProductsAddPage from "./Pages/admin/page/produkAdmin/productAdd/productAddPage.jsx";
// import BookingPage from "./Pages/admin/page/bookingAdmin/bookingAdmin.jsx";
// import AdminSettingsPage from "./Pages/admin/page/settingAdmin/AdminSettingsPage.jsx";

// // 404 Page
// import NotFoundPage from "./Pages/404/notFound.jsx";

// // CSS
// import "./styles.css";

// function AppContent() {
//   const location = useLocation();

//   const hideHeaderFooter = ["/login", "/register", "*"].includes(location.pathname);
//   const isAdminPage = matchPath("/admin/*", location.pathname);

//   useEffect(() => {
//     const pageTitleMap = {
//       // User pages
//       "/": "Beranda - Urban Motion",
//       "/tentang-kami": "Tentang Kami - Urban Motion",
//       "/transportasi-umum/KRL": "KRL - Urban Motion",
//       "/transportasi-umum/MRT": "MRT & LRT - Urban Motion",
//       "/transportasi-umum/transjakarta": "Transjakarta - Urban Motion",
//       "/sewa": "Sewa - Urban Motion",
//       "/daftar-harga": "Daftar Harga - Urban Motion",
//       "/kontak": "Kontak Kami - Urban Motion",
//       "/login": "Login - Urban Motion",
//       "/register": "Register - Urban Motion",
//       "/my-account": "Profil - Urban Motion",
//       "/my-history": "Histori - Urban Motion",

//       // Admin pages
//       "/admin/dashboard": "Dashboard - Urban Motion",
//       "/admin/product": "Product - Urban Motion",
//       "/admin/product-detail/:id": "Detail Product - Urban Motion",
//       "/admin/product/add": "Tambah Produk - Urban Motion",
//       "/admin/product-edit/:id": "Edit Produk - Urban Motion",
//       "/admin/product-delete/:id": "Delete Produk - Urban Motion",
//       "/admin/booking": "Booking - Urban Motion",
//       "/admin/settings": "Settings - Urban Motion",
//     };

//     document.title = pageTitleMap[location.pathname] || "Urban Motion";
//   }, [location.pathname]);

//   return (
//     <div className="app-wrapper">
//       {!hideHeaderFooter && !isAdminPage && <Navbar />}
//       <div className={`main-content ${isAdminPage ? "admin-layout" : ""}`}>
//         {isAdminPage && <Sidebar />}
//         <div className={`content-area ${isAdminPage ? "admin-content" : ""}`}>
//           <Routes>
//             {/* User Routes */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {/* User Routes (Protected) */}
//             <Route
//               path="/"
//               element={
//                 <UserRoute>
//                   <HomePage />
//                 </UserRoute>
//               }
//             />
//             <Route
//               path="/tentang-kami"
//               element={
//                 <UserRoute>
//                   <TentangKami />
//                 </UserRoute>
//               }
//             />
//             <Route
//               path="/transportasi-umum"
//               element={
//                 <UserRoute>
//                   <div>Transportasi Umum</div>
//                 </UserRoute>
//               }
//             />
//             <Route
//               path="/kontak"
//               element={
//                 <UserRoute>
//                   <KontakKami />
//                 </UserRoute>
//               }
//             />
//             <Route
//               path="/my-account"
//               element={
//                 <UserRoute>
//                   <MyAccount />
//                 </UserRoute>
//               }
//             />
//             <Route
//               path="/my-history"
//               element={
//                 <UserRoute>
//                   <Myhistory />
//                 </UserRoute>
//               }
//             />
//             <Route
//               path="/transportasi-umum/KRL"
//               element={
//                 <UserRoute>
//                   <Krl />
//                 </UserRoute>
//               }
//             />
//             <Route
//               path="/transportasi-umum/MRT"
//               element={
//                 <UserRoute>
//                   <MrtLrt />
//                 </UserRoute>
//               }
//             />
//             <Route
//               path="/transportasi-umum/transjakarta"
//               element={
//                 <UserRoute>
//                   <Tj />
//                 </UserRoute>
//               }
//             />
//             <Route
//               path="/daftar-harga"
//               element={
//                 <UserRoute>
//                   <CarRental />
//                 </UserRoute>
//               }
//             />
//             <Route
//               path="/sewa"
//               element={
//                 <UserRoute>
//                   <Sewa />
//                 </UserRoute>
//               }
//             />
//             <Route
//               path="/Konfirmasi"
//               element={
//                 <UserRoute>
//                   <Konfirmasi />
//                 </UserRoute>
//               }
//             />

//             {/* Admin Routes (Protected) */}
//             <Route
//               path="/admin/dashboard"
//               element={
//                 <AdminRoute>
//                   <DashboardAdmin />
//                 </AdminRoute>
//               }
//             />
//             <Route
//               path="/admin/product"
//               element={
//                 <AdminRoute>
//                   <ProductsPage />
//                 </AdminRoute>
//               }
//             />
//             <Route
//               path="/admin/product-detail/:id"
//               element={
//                 <AdminRoute>
//                   <ProductDetailPage />
//                 </AdminRoute>
//               }
//             />
//             <Route
//               path="/admin/product/add"
//               element={
//                 <AdminRoute>
//                   <ProductsAddPage />
//                 </AdminRoute>
//               }
//             />
//             <Route
//               path="/admin/product-edit/:id"
//               element={
//                 <AdminRoute>
//                   <ProductsEditPage />
//                 </AdminRoute>
//               }
//             />
//             <Route
//               path="/admin/product-delete/:id"
//               element={
//                 <AdminRoute>
//                   <div>DELETE</div>
//                 </AdminRoute>
//               }
//             />
//             <Route
//               path="/admin/booking"
//               element={
//                 <AdminRoute>
//                   <BookingPage />
//                 </AdminRoute>
//               }
//             />
//             <Route
//               path="/admin/settings"
//               element={
//                 <AdminRoute>
//                   <AdminSettingsPage />
//                 </AdminRoute>
//               }
//             />

//             {/* 404 */}
//             <Route path="/dummy" element={<div>Lorem Ipsum</div>} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </div>
//       </div>
//       {!hideHeaderFooter && !isAdminPage && <Footer />}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }
// import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
// import { useEffect } from "react";

// // Components
// import { Navbar } from "./Components/Navbar/Navbar.jsx";
// import Footer from "./Components/Footer/Footer.jsx";
// import Sidebar from "./Pages/admin/componen/Sidebar/sidebar.jsx";

// // USER PAGES
// import HomePage from "./Pages/user/Home/home.jsx";
// import KontakKami from "./Pages/user/KontakKami/KontakKami";
// import TentangKami from "./Pages/user/TentangKami/TentangKami";
// import Login from "./Pages/auth/Login/Login";
// import Register from "./Pages/auth/Register/Register";
// import MyAccount from "./Pages/user/MyAccount/MyAccount.jsx";
// import Myhistory from "./Pages/user/MyHistory/histori.jsx";
// import Krl from "./Pages/user/Krl/Krl.jsx";
// import Tj from "./Pages/user/Tj/Tj.jsx";
// import MrtLrt from "./Pages/user/Mrt&Lrt/MrtLrt.jsx";
// import CarRental from "./Pages/user/Pricelist/Pricelist.jsx";
// import Sewa from "./Pages/user/sewa/sewa.jsx";
// import Konfirmasi from "./Pages/user/Konfirmasi-Sewa/Konfirmasi.jsx";

// // ADMIN PAGES
// import DashboardAdmin from "./Pages/admin/page/dashboardAdmin/dashboardAdmin.jsx";
// import ProductsPage from "./Pages/admin/page/produkAdmin/productRead/prdoukAdmin.jsx";
// import ProductDetailPage from "./Pages/admin/page/produkAdmin/productDetailEdit/productDetailPage.jsx";
// import ProductsEditPage from "./Pages/admin/page/produkAdmin/productEdit/productEditPage.jsx";
// import ProductsAddPage from "./Pages/admin/page/produkAdmin/productAdd/productAddPage.jsx";
// import BookingPage from "./Pages/admin/page/bookingAdmin/bookingAdmin.jsx";
// import AdminSettingsPage from "./Pages/admin/page/settingAdmin/AdminSettingsPage.jsx";

// // 404 Page
// import NotFoundPage from "./Pages/404/notFound.jsx";

// // CSS
// import "./styles.css";

// function AppContent() {
//   const location = useLocation();

//   // Check login status & role from localStorage
//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//   const role = localStorage.getItem("role"); // "admin" / "user"

//   const isAdmin = role === "admin";
//   const isUser = role === "user";

//   const isAdminPath = location.pathname.startsWith("/admin");

//   const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);

//   // 🚫 Redirect jika user nyasar ke admin page
//   if (isAdminPath && !isAdmin) {
//     return <Navigate to="/" replace />;
//   }

//   // 🚫 Redirect jika admin nyasar ke user page
//   const isUserPath = !isAdminPath && !["/login", "/register"].includes(location.pathname);
//   if (isUserPath && isAdmin) {
//     return <Navigate to="/admin/dashboard" replace />;
//   }

//   // Set judul halaman
//   useEffect(() => {
//     const pageTitleMap = {
//       "/": "Beranda - Urban Motion",
//       "/tentang-kami": "Tentang Kami - Urban Motion",
//       "/transportasi-umum/KRL": "KRL - Urban Motion",
//       "/transportasi-umum/MRT": "MRT & LRT - Urban Motion",
//       "/transportasi-umum/transjakarta": "Transjakarta - Urban Motion",
//       "/sewa": "Sewa - Urban Motion",
//       "/daftar-harga": "Daftar Harga - Urban Motion",
//       "/kontak": "Kontak Kami - Urban Motion",
//       "/login": "Login - Urban Motion",
//       "/register": "Register - Urban Motion",
//       "/my-account": "Profil - Urban Motion",
//       "/my-history": "Histori - Urban Motion",
//       "/admin/dashboard": "Dashboard - Urban Motion",
//       "/admin/product": "Product - Urban Motion",
//       "/admin/product-detail/:id": "Detail Product - Urban Motion",
//       "/admin/product/add": "Tambah Produk - Urban Motion",
//       "/admin/product-edit/:id": "Edit Produk - Urban Motion",
//       "/admin/booking": "Booking - Urban Motion",
//       "/admin/settings": "Settings - Urban Motion",
//     };

//     document.title = pageTitleMap[location.pathname] || "Urban Motion";
//   }, [location.pathname]);

//   return (
//     <div className="app-wrapper">
//       {!hideHeaderFooter && !isAdminPath && <Navbar />}
//       <div className={`main-content ${isAdminPath ? "admin-layout" : ""}`}>
//         {isAdminPath && <Sidebar />}
//         <div className={`content-area ${isAdminPath ? "admin-content" : ""}`}>
//           <Routes>
//             {/* Auth Routes */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {/* User Routes (hanya tampil jika user login sebagai user) */}
//             {isUser && (
//               <>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/tentang-kami" element={<TentangKami />} />
//                 <Route path="/transportasi-umum" element={<div>Transportasi Umum</div>} />
//                 <Route path="/kontak" element={<KontakKami />} />
//                 <Route path="/my-account" element={<MyAccount />} />
//                 <Route path="/my-history" element={<Myhistory />} />
//                 <Route path="/transportasi-umum/KRL" element={<Krl />} />
//                 <Route path="/transportasi-umum/MRT" element={<MrtLrt />} />
//                 <Route path="/transportasi-umum/transjakarta" element={<Tj />} />
//                 <Route path="/daftar-harga" element={<CarRental />} />
//                 <Route path="/sewa" element={<Sewa />} />
//                 <Route path="/Konfirmasi" element={<Konfirmasi />} />
//               </>
//             )}

//             {/* Admin Routes (hanya tampil jika admin login) */}
//             {isAdmin && (
//               <>
//                 <Route path="/admin/dashboard" element={<DashboardAdmin />} />
//                 <Route path="/admin/product" element={<ProductsPage />} />
//                 <Route path="/admin/product-detail/:id" element={<ProductDetailPage />} />
//                 <Route path="/admin/product/add" element={<ProductsAddPage />} />
//                 <Route path="/admin/product-edit/:id" element={<ProductsEditPage />} />
//                 <Route path="/admin/product-delete/:id" element={<div>DELETE</div>} />
//                 <Route path="/admin/booking" element={<BookingPage />} />
//                 <Route path="/admin/settings" element={<AdminSettingsPage />} />
//               </>
//             )}

//             {/* Fallback 404 */}
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </div>
//       </div>
//       {!hideHeaderFooter && !isAdminPath && <Footer />}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

// Components
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Sidebar from "./Pages/admin/componen/Sidebar/sidebar.jsx";

// USER PAGES
import HomePage from "./Pages/user/Home/home.jsx";
import KontakKami from "./Pages/user/KontakKami/KontakKami";
import TentangKami from "./Pages/user/TentangKami/TentangKami";
import Login from "./Pages/auth/Login/Login";
import Register from "./Pages/auth/Register/Register";
import MyAccount from "./Pages/user/MyAccount/MyAccount.jsx";
import Myhistory from "./Pages/user/MyHistory/histori.jsx";
import Krl from "./Pages/user/Krl/Krl.jsx";
import Tj from "./Pages/user/Tj/Tj.jsx";
import MrtLrt from "./Pages/user/Mrt&Lrt/MrtLrt.jsx";
import CarRental from "./Pages/user/Pricelist/Pricelist.jsx";
import Sewa from "./Pages/user/sewa/sewa.jsx";
import Konfirmasi from "./Pages/user/Konfirmasi-Sewa/Konfirmasi.jsx";

// ADMIN PAGES
import DashboardAdmin from "./Pages/admin/page/dashboardAdmin/dashboardAdmin.jsx";
import ProductsPage from "./Pages/admin/page/produkAdmin/productRead/prdoukAdmin.jsx";
import ProductDetailPage from "./Pages/admin/page/produkAdmin/productDetailEdit/productDetailPage.jsx";
import ProductsEditPage from "./Pages/admin/page/produkAdmin/productEdit/productEditPage.jsx";
import ProductsAddPage from "./Pages/admin/page/produkAdmin/productAdd/productAddPage.jsx";
import BookingPage from "./Pages/admin/page/bookingAdmin/bookingAdmin.jsx";
import AdminSettingsPage from "./Pages/admin/page/settingAdmin/AdminSettingsPage.jsx";

// 404 Page
import NotFoundPage from "./Pages/404/notFound.jsx";

// CSS
import "./styles.css";

function AppContent() {
  const location = useLocation();

  // Cek login & role
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("role"); // "admin" / "user"
  const isAdmin = role === "admin";

  const isAdminPath = location.pathname.startsWith("/admin");
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);

  // 🚫 Redirect user biasa kalau mau akses admin
  if (isAdminPath && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  // 🚫 Redirect admin kalau ke user page
  const isUserPath = !isAdminPath && !["/login", "/register"].includes(location.pathname);
  if (isUserPath && isAdmin) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  // Set judul halaman
  useEffect(() => {
    const pageTitleMap = {
      "/": "Beranda - Urban Motion",
      "/tentang-kami": "Tentang Kami - Urban Motion",
      "/transportasi-umum/KRL": "KRL - Urban Motion",
      "/transportasi-umum/MRT": "MRT & LRT - Urban Motion",
      "/transportasi-umum/transjakarta": "Transjakarta - Urban Motion",
      "/sewa": "Sewa - Urban Motion",
      "/daftar-harga": "Daftar Harga - Urban Motion",
      "/kontak": "Kontak Kami - Urban Motion",
      "/login": "Login - Urban Motion",
      "/register": "Register - Urban Motion",
      "/my-account": "Profil - Urban Motion",
      "/my-history": "Histori - Urban Motion",
      "/Konfirmasi": "Konfirmasi Sewa - Urban Motion",
      "/admin/dashboard": "Dashboard - Urban Motion",
      "/admin/product": "Produk - Urban Motion",
      "/admin/product-detail/:id": "Detail Produk - Urban Motion",
      "/admin/product/add": "Tambah Produk - Urban Motion",
      "/admin/product-edit/:id": "Edit Produk - Urban Motion",
      "/admin/booking": "Booking - Urban Motion",
      "/admin/settings": "Settings - Urban Motion",
    };

    document.title = pageTitleMap[location.pathname] || "Urban Motion";
  }, [location.pathname]);

  return (
    <div className="app-wrapper">
      {!hideHeaderFooter && !isAdminPath && <Navbar />}
      <div className={`main-content ${isAdminPath ? "admin-layout" : ""}`}>
        {isAdminPath && <Sidebar />}
        <div className={`content-area ${isAdminPath ? "admin-content" : ""}`}>
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Public User Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/transportasi-umum" element={<div>Transportasi Umum</div>} />
            <Route path="/kontak" element={<KontakKami />} />
            <Route path="/transportasi-umum/KRL" element={<Krl />} />
            <Route path="/transportasi-umum/MRT" element={<MrtLrt />} />
            <Route path="/transportasi-umum/transjakarta" element={<Tj />} />
            <Route path="/daftar-harga" element={<CarRental />} />
            <Route path="/sewa" element={<Sewa />} />

            {/* Protected User Routes (login wajib) */}
            {isLoggedIn && (
              <>
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/my-history" element={<Myhistory />} />
                <Route path="/Konfirmasi" element={<Konfirmasi />} />
              </>
            )}

            {/* Admin Routes */}
            {isAdmin && (
              <>
                <Route path="/admin/dashboard" element={<DashboardAdmin />} />
                <Route path="/admin/product" element={<ProductsPage />} />
                <Route path="/admin/product-detail/:id" element={<ProductDetailPage />} />
                <Route path="/admin/product/add" element={<ProductsAddPage />} />
                <Route path="/admin/product-edit/:id" element={<ProductsEditPage />} />
                <Route path="/admin/booking" element={<BookingPage />} />
                <Route path="/admin/settings" element={<AdminSettingsPage />} />
              </>
            )}

            {/* Fallback 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      {!hideHeaderFooter && !isAdminPath && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
