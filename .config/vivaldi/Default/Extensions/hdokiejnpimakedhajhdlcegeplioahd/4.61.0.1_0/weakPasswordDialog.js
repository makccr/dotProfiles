var WeakPasswordDialog=function(t){Dialog.call(this,t,{title:Strings.translateString("Weak Password"),dynamicHeight:!0,responsive:!1,closeButtonEnabled:!0,buttonsInsideContent:!0})};WeakPasswordDialog.prototype=Object.create(Dialog.prototype),(WeakPasswordDialog.prototype.constructor=WeakPasswordDialog).prototype.initialize=function(){var t;Dialog.prototype.initialize.apply(this,arguments),t=this,$("#weakPasswordDialogDisableSite").bind("click",function(){bg.disablesitealert(t.data.notification.aid),t.close()}),$("#weakPasswordDialogDisableAll").bind("click",function(){bg.disableallalerts(),t.close()}),$("#weakPasswordDialogAction").bind("click",function(){t.submit()})},WeakPasswordDialog.prototype.setupButtons=function(){},WeakPasswordDialog.prototype.close=function(){Dialog.prototype.close.apply(this,arguments),LPPlatform.closePopup()},WeakPasswordDialog.prototype.setDynamicHeight=function(){var t=Dialog.prototype.setDynamicHeight.apply(this,arguments);t&&this.data.resizer(t,this.$element.width())},WeakPasswordDialog.prototype.setup=function(t,o){o.notification&&($("#weakPasswordDialogName").text(" "+o.notification.name),$("#weakPasswordDialogUsername").text(" "+o.notification.username)),Dialog.prototype.setup.apply(this,arguments)},WeakPasswordDialog.prototype.handleSubmit=function(){bg.openURL("https://lastpass.com/?securitychallenge=1"),this.close()};