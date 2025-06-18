public with sharing class FlyoutData {
  @AuraEnabled
  public String label;
  @AuraEnabled
  public String value;
  @AuraEnabled
  public Boolean selectable;
  @AuraEnabled
  public List<FlyoutData> children;
}
