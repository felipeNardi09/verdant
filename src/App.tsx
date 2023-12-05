import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Checkout from "./pages/Checkout";
import AllOrders from "./pages/AllOrders";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="menu" element={<Menu />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="all-orders" element={<AllOrders />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}
