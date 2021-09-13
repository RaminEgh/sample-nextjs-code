import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReactCodeInput from 'react-verification-code-input';
import {makeStyles} from '@material-ui/core/styles';
import {withTranslation} from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';


const VerificationCode = props => {
    const {t} = props;
    const useStyles = makeStyles((theme) => ({
        codeInput: {
            width: '100% !important',
            direction: 'rtl',
            textAlign: 'center',
            '$ input': {
                fontFamily: 'dana !important',
            },
            '& input:focus': {
                border: `2px solid ${theme.palette.common.mainColor} !important`,
                caretColor: theme.palette.common.mainColor
            }
        },
    }));
    const classes = useStyles();
    const [timer, setTimer] = useState(60);
    const [sendCodeAgain, setSendCodeAgain] = useState(false);
    let verificationCodeTimer;

    const onCompleteVerificationCode = code => props.onCheckForm(code);

    const onSendCodeAgain = () => {
        props.onSendVerificationCode();
        setSendCodeAgain(false);
    };

    useEffect(() => {
        verificationCodeTimer = setInterval(() => {
            setTimer(prevState => prevState - 1);
        }, 1000);
        return () => clearInterval(verificationCodeTimer)
    }, [sendCodeAgain]);
    if (timer <= 0) {
        setTimer(60);
        clearInterval(verificationCodeTimer);
        setSendCodeAgain(true);
    }

    return (
        <Box m={3}>
            <form >
                <Card>
                    <CardContent align='center'>
                        <Typography align='center' variant='subtitle2' noWrap paragraph >{t('enter verification code')}</Typography>
                        <ReactCodeInput className={classes.codeInput} fields={6} type='number' fieldWidth={52}
                                        fieldHeight={60} onComplete={onCompleteVerificationCode}/>
                        {sendCodeAgain ? <Button size='small' color='primary' onClick={onSendCodeAgain}>ارسال دوباره کد</Button> :
                            <small color={grey[60]}> کد را دریافت نکردید؟ {timer} ثانیه تا امکان ارسال مجدد کد</small>}
                    </CardContent>
                </Card>
            </form>
        </Box>
    );
};

export default withTranslation()(VerificationCode);