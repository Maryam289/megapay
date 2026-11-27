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

declare type User = {
    $id: string;
    email: string;
    userId: string;
    APICustomerUrl: string;
    APICustomerId: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    dataOfBirth: string;
    ssn: string;

}

declare type Transation = {
    id: string;
    $id: string;
    name: string;
    paymentChannel: string;
    type: string;
    accountId: string;
    amount: number;
    pending: boolean;
    category: string;
    date: string;
    image: string;
    type: string;
    $createdAt: string;
    channel: string;
    senderBankId: string;
    receiverBankId: string;
 
}

declare type Bank = {
    $id: string;
    accountId: string;
    bankId: string;
    accessToken: string;
    fundingSourceUrl: string;
    userId: string;
    shareableId: string;
    
}

declare type Account = {
    id: string;
    availableBalance: number;
    currentBalance: number;
    officialName: string;
    mask: string;
    institutionId: string;
    name: string;
    type: string;
    subtype: string;
    appwriteItemId: string;
    shareableId: string;
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

declare interface SiderbarProps {
    user: User;
}

declare interface MobileNavProps {
    user: User;
}

declare interface RightSidebarProps {
    user: User;
    transactions: Transation;
    banks: Bank[] & Account[];
}

declare interface CreditCardProps{
    account: Account;
    userName: string;
    showBalance?: boolean;
}


