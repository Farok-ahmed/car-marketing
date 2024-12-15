import DashboardBookingCard from "@/components/DashboardBookingCard";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="container mx-auto">
      <h2 className="py-10 bg-slate-100 rounded-md my-3 px-7 font-bold text-2xl">
        Dashboard
      </h2>
      <Tabs
        defaultValue="dashboard"
        className="w-full sm:flex gap-4 pt-10 pb-24"
      >
        <TabsList className="grid sm:w-[500px] grid-cols-2 sm:grid-cols-1   ">
          <TabsTrigger value="dashboard" className="text-end">
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="bookingCars">Booking Cars</TabsTrigger>
        </TabsList>
        <TabsContent className="sm:w-[1200px]" value="dashboard">
          <Card>
            <CardHeader>
              <CardTitle>
                Welcome {user.primaryEmailAddress.emailAddress}{" "}
              </CardTitle>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent className="sm:w-[1200px]" value="bookingCars">
          <Card>
            <CardHeader>
              <CardTitle>Booking Cars</CardTitle>
              <CardDescription>All Booking Cars List</CardDescription>
            </CardHeader>
            <DashboardBookingCard />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
