import React from 'react';

import Header from '../Header';
import ButtonGroup from '../ButtonGroup';

const Page = ({title}) => (
  <>
    <Header />
    <div className="content">
      { title ? title : '' }
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit. Risus quis varius quam quisque id diam vel. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Nam at lectus urna duis convallis convallis tellus id. Lacus luctus accumsan tortor posuere ac ut consequat semper. Enim nulla aliquet porttitor lacus luctus accumsan. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Diam ut venenatis tellus in. Nisl pretium fusce id velit ut tortor pretium viverra. Volutpat est velit egestas dui id ornare. At lectus urna duis convallis convallis tellus id interdum velit. Tellus orci ac auctor augue mauris augue neque. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Risus pretium quam vulputate dignissim suspendisse in. Vitae auctor eu augue ut lectus arcu. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Vel pharetra vel turpis nunc eget lorem. Sociis natoque penatibus et magnis dis parturient montes nascetur. Dui faucibus in ornare quam viverra orci sagittis eu.</p>
      <ButtonGroup />
    </div>
  </>
);

export default Page;