import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = {firstName: 'Alex', lastName: 'Morgan', email: "alexmorgan@gmail.com"}

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type = "greeting"
          title = "Welcome"
          user = {loggedIn?.firstName || 'Guest'}
          subtext = "Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {12480.50}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions = {[]}
        banks = {[{currentBalance: 500.64}, {currentBalance: 924.17}]}
      />
    </section>
  );
};

export default Home
