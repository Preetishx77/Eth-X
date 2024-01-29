import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {BottomSheetProps} from './types';
import Typography from '../../atoms/Typography/Typography.styled';
import Button from '../../atoms/Button/Button.styled';
import {Colors} from '../../../../Provider/Colors';
import NotificationSVG from '../../../../assets/BottomTabs/Notification';
import { FlexRowCard } from '../../organisms/HOCs/FlexComponents/FlexComponents.styled';

const BottomSheet = React.forwardRef(function BottomSheet(
  {
    children,
    height,
    closeDuration,
    openDuration,
    addPrimaryButton = false,
    addHeaderSvgIcon = false,
    addSecondaryButton = false,
    addHeaderText = false,
    headerText,
    addSubHeaderText = false,
    subHeaderText,
    subHeaderTextColor = 'Grey_8',
    onPressPrimary,
    onPressSecondary,
    HeaderSvgURI,
    secondaryButtonText,
    primaryButtonText,
    disablePrimaryButton = false,
    closeOnDragDown = true,
    onClose,
    footerOverride,
    primaryButtonIcon,
    secondaryButtonIcon,
    isPrimaryButtonLoading,
  }: BottomSheetProps,
  ref,
) {
  return (
    <RBSheet
      ref={ref}
      closeOnDragDown={closeOnDragDown}
      height={height}
      customStyles={{
        container: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backgroundColor: Colors.Black,
        },
      }}
      keyboardAvoidingViewEnabled
      closeDuration={closeDuration || 500}
      openDuration={openDuration || 600}
      animationType={'slide'}
      onClose={onClose}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={BSContainerStyle}>
          <View style={{gap: 12, flex: 1}}>
            <FlexRowCard alignItems='center' gap={10}>

            {addHeaderSvgIcon && <NotificationSVG width={36} color={Colors.White} height={36} />}
            {addHeaderText && (
              <Typography variant="title2" fontWeight={700} color='White'>
                {headerText}
              </Typography>
            )}
            </FlexRowCard>

            {addSubHeaderText && (
              <Typography
                variant="caption1"
                fontWeight={500}

                color={subHeaderTextColor}>
                {subHeaderText}
              </Typography>
            )}
            {children}
            <View style={[FooterActionsWrapper, footerOverride]}>
              {addSecondaryButton && (
                <Button
                  fluid={true}
                  variant={'secondary'}
                  iconName={secondaryButtonIcon || ""}
                  onPressBTN={onPressSecondary}>
                  {secondaryButtonText}
                </Button>
              )}
              {addPrimaryButton && (
                <Button
                  disabled={disablePrimaryButton}
                  fluid={true}
                  variant={'primary'}
                  iconName={primaryButtonIcon || ""}
                  isLoading={isPrimaryButtonLoading}
                  onPressBTN={onPressPrimary}>
                  {primaryButtonText}
                </Button>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </RBSheet>
  );
});

const BSContainerStyle = {
  height: '100%',
  width: '100%',
  paddingHorizontal: 24,
  paddingVertical: 32,
  flex: 1,
};

const FooterActionsWrapper = {
  marginTop: 0,
  paddingTop: 20,
  flexDirection: 'row',
  width: '100%',
  gap: 12,
  minHeight: 60,
};

export default BottomSheet;
