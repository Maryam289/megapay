declare type SearchParamProps = {
    params: { [key:string]: string };
    searchParams: { [key:string]: string | string[] | undefined };
};

declare type SingUpParams = {
    firstName: string;
    lastName: string;
    address: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
    email: string;
    password: string;
    confirmPassword: string;
}

declare interface HeaderBoxProps {
    type?: "title" | "greeting" | "inter";
    title: string;
    user?: string;
    subtext: string;
}

declare interface TotalBalanceBoxProps {
    accounts?: [];
    totalBanks?: number;
    totalCurrentBalance: number;

}

declare interface DoughnutChartProps {
    accounts?: [];
}