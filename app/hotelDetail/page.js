import Footer from '../_components/Footer';
import Navigation from '../_components/Navigation';
import HotelDetails from '../_features/hotelDetail/hotelDetail';

export const metadata = {
    title: "Hotel Details",
};

export default async function Page() {
    return (
        <div className="bg-[#F7FAFA] min-h-[100vh]">
            <div className="border-b border-slate-200 bg-[#F7FAFA] sticky top-0 left-0 right-0 w-full z-50">
                <Navigation varient="main-nav" />
            </div>
            <HotelDetails />
            <Footer />
        </div>
    );
}
