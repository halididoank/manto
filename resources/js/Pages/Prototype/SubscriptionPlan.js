import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Head } from "@inertiajs/inertia-react";
export default function SubscriptionPlan() {
    return (
        <Authenticated>
            <Head title="Subscription Plan" />
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    <SubscriptionCard
                        name="Basic"
                        price={299000}
                        durationInMohth={3}
                        features={["feature 1", "feature 2", "feature 3"]}
                    />
                    <SubscriptionCard
                        isPremium
                        name="Premium"
                        price={800000}
                        durationInMohth={6}
                        features={["feature 3", "feature 2", "feature 1"]}
                    />
                </div>
            </div>
        </Authenticated>
    );
}