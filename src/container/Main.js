import Main from '../components/Main';
import {connect} from 'react-redux';
import uploadDate from "../async-actions/uploadDate";
import downloadDate from "../async-actions/downloadDate";

const mapStateToProps = (state) => ({
    localDate: state.main.localDate,
    serverDate: state.main.serverDate,
    serverDateString: state.main.serverDateString,
});

const mapDispatchToProps = {
    uploadDate,
    downloadDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);