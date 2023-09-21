import React from 'react'
import Hero from './Hero'
import Whycouriers from './Whycouriers';
import BoostEarns from './BoostEarns';
import Require from './Require';
import Delivery from './Delivery';
import BoltCourier from './BoltCourier';
import Frequent from './Frequent';

const HomeScreen = () => {
  return (
    <div>
         <Hero />
         <Whycouriers />
         <BoostEarns />
         <Require />
         <Delivery />
         <BoltCourier />
         <Frequent />
    </div>
  )
}

export default HomeScreen