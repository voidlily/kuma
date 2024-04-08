package events

import (
	"github.com/pkg/errors"

	"github.com/kumahq/kuma/pkg/core/resources/model"
)

type Event interface{}

type Op int

const (
	Create Op = iota
	Update
	Delete
)

type ResourceChangedEvent struct {
	Operation Op
	Type      model.ResourceType
	Key       model.ResourceKey
	TenantID  string
}

<<<<<<< HEAD
=======
type TriggerInsightsComputationEvent struct {
	TenantID string
}

type TriggerKDSResyncEvent struct {
	Type   model.ResourceType
	NodeID string
}

>>>>>>> 4752f7b82 (fix(kds): fix retry on NACK and add backoff (#9736))
var ListenerStoppedErr = errors.New("listener closed")

type Listener interface {
	Recv() <-chan Event
	Close()
}

type Emitter interface {
	Send(Event)
}

type ListenerFactory interface {
	Subscribe() Listener
}
