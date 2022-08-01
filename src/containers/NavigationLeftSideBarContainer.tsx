import { connect, ConnectedProps } from 'react-redux';

import NavigationLeftSideBar from '../components/NavigationLeftSideBar';
import { setShowLeftMenu } from '../state/actions';

interface RootState {
    showLeftMenu: boolean
}
  
const mapStateToProps = (state: RootState) => ({
    showLeftMenu: state.showLeftMenu
})
  
const mapDispatchToProps = {
    setShowLeftMenu
}
  
const connector = connect(mapStateToProps, mapDispatchToProps)
  
export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(NavigationLeftSideBar)