---
sidebar_position: 4
---

# Relationships

A relationship is a link between STIX Domain Objects (SDOs), STIX Cyber-observable Objects (SCOs), or between an SDO and
a SCO that describes the way in which the objects are related. Relationships can be represented using an external STIX
Relationship Object (SRO) or, in some cases, through certain properties which store an identifier reference that
comprises an embedded relationship, (for example the created_by_ref property).

The generic STIX Relationship Object (SRO) is one of two SROs and is used for most relationships in STIX. This generic
SRO contains a property called relationship_type to describe more specifically what the relationship represents. This
specification defines a set of known terms to use for the relationship_type property between SDOs of specific types. For
example, the Indicator SDO defines a relationship from itself to Malware via a relationship_type of indicates to
describe how the Indicator can be used to detect the presence of the corresponding Malware. In addition to the terms
defined in the specification, STIX also allows for user-defined terms to be used as the relationship type.

Currently the only other SRO (besides a generic Relationship) is the Sighting SRO. The Sighting object is used to
capture cases where an entity has "seen" an SDO, such as sighting an indicator. Sighting is a separate SRO because it
contains additional properties such as count that are only applicable to Sighting relationships. Other SROs may be
defined in future versions of STIX if new relationships are identified that also require additional properties not
present on the generic Relationship object.

In addition to relationships created using the SROs (Relationship and Sighting), STIX also uses ID references to
represent embedded relationships. Embedded relationships are simply ID reference properties on STIX Objects that contain
the ID of a different STIX Object. Embedded relationships are used when the property is an inherent part of the object
and not something that a third party might add or something that might require the inclusion of a confidence score.
Because they represent an inherent linkage and have no other properties, an SRO is not needed to represent them. An
embedded relationship can only be asserted by the creator of the object ("object creator") it is contained in.

For example, the entity that created a STIX Object is an inherent, factual part of that object and therefore that
information is captured in an embedded relationship contained in the created_by_ref property rather than through the use
of an SRO.
